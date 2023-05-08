import json
import os
import re
from collections import defaultdict

def parse_html_file(file_path):
    var_dict = defaultdict(dict)
    class_dict = {'header': 'header', 'main': 'news', 'footer': 'footer'}

    with open(file_path, 'r') as f:
        for line in f:
            print(line)
            matches = re.findall(r'<(\w+)[^>]*>([^<]+)</\1>', line)
            for match in matches:
                element = match[0]
                text = match[1].strip()

                var_name = ''
                if element in class_dict:
                    var_name += class_dict[element] + '.'
                var_name += re.sub(r'\W+', '_', text[:2].lower())

                line = line.replace(match[1], '{{' + var_name + '}}')

                var_dict[class_dict.get(element, 'others')][var_name] = text

            print(line, end='')

    json_string = json.dumps(var_dict, indent=2)
    print('')
    print('--------------------------------------------')
    print('')
    print(json_string)

if __name__ == '__main__':
    #file_path = input("Enter HTML file path: ")
    file_path = 'test.html'
    if not os.path.exists(file_path):
        print("Invalid file path.")
    else:
        parse_html_file(file_path)
