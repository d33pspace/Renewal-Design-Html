import sys
import re
import json

# Define the mapping of element classes to variable names
class_to_var = {
    "header": "header",
    "main": "news",
    "footer": "footer"
}

# Define the regex pattern for matching text within tags
text_pattern = r">([^<]+)<"

def process_html_file(html_file_path):
    # Open the HTML file for reading
    with open(html_file_path, "r") as html_file:
        # Read all lines of the file into a list
        lines = html_file.readlines()

    # Initialize an empty dictionary to store the variable-to-text mapping
    var_to_text = {}

    # Initialize the variable prefix as an empty string
    var_prefix = ""

    # Loop through each line of the HTML code
    for line in lines:
        # Set the variable prefix to an empty string if a closing tag is found
        if "</" in line:
            var_prefix = ""
        else:
            # Loop through each class-to-variable mapping
            for class_name, var_prefix_candidate in class_to_var.items():
                # Check if the line contains the class name
                if f"class=\"{class_name}" in line:
                    # Set the variable prefix as the class prefix
                    var_prefix = var_prefix_candidate
                    break

            # If a variable prefix was not found based on class, use an empty string
            if var_prefix == "":
                # Set the variable name suffix as the first two letters of the match text
                var_suffix = line.split(">")[1][:2].lower()
            else:
                # Set the variable name suffix as the class prefix plus the first two letters of the match text
                var_suffix = f"{var_prefix}.{line.split('>')[1][:2].lower()}"

            # Replace the match text with the variable name surrounded by double curly braces
            line = line.replace(re.findall(text_pattern, line)[0], f"{{{{ {var_suffix} }}}}")

            # Add the variable-to-text mapping to the dictionary
            if var_suffix not in var_to_text:
                var_to_text[var_suffix] = re.findall(text_pattern, line)[0]

        # Print the updated line
        print(line)

    # Convert the variable-to-text mapping dictionary to a pretty-printed JSON string
    var_to_text_json = json.dumps({var_name: {var_name.split('.')[1]: text} for var_name, text in var_to_text.items()}, indent=2)

    # Print the JSON string
    print(var_to_text_json)

# Call the process_html_file function with the first command line argument as the HTML file path
process_html_file('test.html')
