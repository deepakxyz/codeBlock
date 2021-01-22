import json

# read json file
with open('data.json', 'r') as rf:
    data = rf.read()
    data_json = json.loads(data)

    for person in data_json['people']:
        print(person['emails'])
