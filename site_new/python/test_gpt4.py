import json
import bs4
import re
from bs4 import BeautifulSoup

variable_prefix_dict = {"header": "header", "main": "news", "footer": "footer"}
variable_prefix = ""
json_result = {}

output_lines = []

with open("../news.html", "r", encoding="utf-8") as file:
    for line in file:
        soup = BeautifulSoup(line, "html.parser")

        for tag in soup.descendants:
            if tag.name in variable_prefix_dict:
                variable_prefix = variable_prefix_dict[tag.name]

            elif f"/{tag.name}" in variable_prefix_dict.values():
                variable_prefix = ""

            elif isinstance(tag, bs4.Tag) and tag.string and tag.string.strip():
                text = tag.string.strip()
                variable_name = re.sub(r"[^a-zA-Z0-9]+", "_", (tag.get("class")[0] if tag.get("class") else "_".join(text.split()[:2]))).lower()

                if variable_prefix:
                    json_result.setdefault(variable_prefix, {})[variable_name] = text
                    tag.string.replace_with(f"{{{{{variable_prefix}.{variable_name}}}}}")
                else:
                    json_result[variable_name] = text
                    tag.string.replace_with(f"{{{{ {variable_name} }}}}")

        output_lines.append(str(soup).rstrip())

generated_html = "\n".join(output_lines)
print(generated_html)
print("\n")

formatted_json = json.dumps(json_result, indent=2)
print(formatted_json)
