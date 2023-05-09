import re
from html.parser import HTMLParser
import json

html_file="../news.html"
variable_prefix_dict = {"header": "header", "main": "news", "footer": "footer"}
variable_prefix = ""
json_result = {}

class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        global variable_prefix
        if tag in variable_prefix_dict:
            variable_prefix = variable_prefix_dict[tag]
        print(f"<{tag}", end="")
        for attr in attrs:
            print(f' {attr[0]}="{attr[1]}"', end="")
        print(">", end="")

    def handle_endtag(self, tag):
        global variable_prefix
        if tag in variable_prefix_dict:
            variable_prefix = ""
        print(f"</{tag}>", end="")

    def handle_data(self, data):
        global variable_prefix, json_result
        if variable_prefix and data.strip():
            class_name = ""
            for match in re.finditer(r'class="([^"]+)"', self.get_starttag_text()):
                class_name = match.group(1)
            words = data.split()
            if len(words) < 5:
                variable_name = " ".join(words).replace(" ", "-").lower()
            elif class_name:
                variable_name = class_name.lower()
            else:
                variable_name = " ".join(words[:2]).replace(" ", "-").lower()
            variable_name = re.sub(r'[\W_]+', '_', variable_name)
            json_result.setdefault(variable_prefix, {})[variable_name] = data.strip()
            print(f"{{{{{variable_prefix}.{variable_name}}}}}", end="")
        else:
            print(data, end="")

parser = MyHTMLParser()

with open(html_file, "r", encoding="utf-8") as f:
    for line in f:
        parser.feed(line)

print("\n\n" + json.dumps(json_result, indent=2))
