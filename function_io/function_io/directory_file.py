import glob, os
from modify import *
array_f = []
os.chdir("./")

for file in glob.glob("*.html"):
    array_f.append(file)
    print(file)

for file in glob.glob("*.js"):
    array_f.append(file)
    print(file)

for file in array_f:
	replace_string(file)