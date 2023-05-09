import json
import re

variable_prefix_dict = {"header": "header", "main": "news", "footer": "footer"}
variable_prefix = ""
json_result = {}

html_file = "../news.html"

output_lines = []

def replace_text(match):
    text = match.group(3).strip()
    if len(text.split()) < 5:
        variable_name = "_".join(text.split())
    elif match.group(2):
        variable_name = match.group(2)
    else:
        variable_name = "_".join(text.split()[:2])

    variable_name = re.sub(r"[^a-zA-Z0-9]+", "_", variable_name).lower()

    if variable_prefix:
        json_result.setdefault(variable_prefix, {})[variable_name] = text
        return f"<{match.group(1)}>{{{{{variable_prefix}.{variable_name}}}}}</{match.group(1)}>"
    else:
        json_result[variable_name] = text
        return f"<{match.group(1)}>{{{{ {variable_name} }}}}</{match.group(1)}>"


with open(html_file, "r", encoding="utf-8") as file:
    for line in file:
        if re.search(rf"<({ '|'.join(variable_prefix_dict.keys()) })>", line):
            variable_prefix = variable_prefix_dict[re.search(rf"<({ '|'.join(variable_prefix_dict.keys()) })>", line).group(1)]
        elif re.search(rf"</({ '|'.join(variable_prefix_dict.values()) })>", line):
            variable_prefix = ""

        line = re.sub(r'<([\w-]+)(?: class="([\w-]+)")?>([^<>]+)</\1>', replace_text, line)
        output_lines.append(line)

generated_html = "".join(output_lines)
print(generated_html)
print("\n")

formatted_json = json.dumps(json_result, indent=2)
print(formatted_json)
