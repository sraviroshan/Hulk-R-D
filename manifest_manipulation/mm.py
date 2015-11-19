import json, sys

if len(sys.argv) <= 2:
    print("usage : mm.py <manifest.json> <text to append to js array>")
    exit(0)

file_name = sys.argv[1]
text_to_append = sys.argv[2]

f = open(file_name)
manifest = f.read()
f.close()

print(manifest)

manifest_json = json.loads(manifest)
content_scripts = manifest_json['content_scripts']
js = content_scripts[0]['js']
js.append(text_to_append)
print(json.dumps(manifest_json, indent=4))

f = open(sys.argv[1], 'w')
f.write(json.dumps(manifest_json, indent=4, sort_keys=True))
