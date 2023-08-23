import os
import json

# Set the API key
raw_input = input("Enter your API key (startswith sk-...): ")
api_key = raw_input.strip()
print("The key you entered is: ", api_key)

# set dir as the current directory
dir = os.path.dirname(os.path.abspath(__file__))

# Write the API key to the file
with open("./backend/codex-server/drvtry", "w") as f:
    json.dump(api_key, f)

with open("./backend/codex-server/drvtry-beta", "r") as f:
    json.dump(api_key, f)

with open("./data/transmap/cases/openai.key", "w") as f:
    f.write(api_key)

with open("./data/transmap/codemap/openai.key", 'w') as f:
    f.write(api_key)