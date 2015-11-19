import glob, os
from modify import *
array_f = []
os.chdir("./")

for file in glob.glob("*.html"):
    array_f.append(file)
    print(file)
array_f1 = array_f;


for file in array_f1:
	f = open(file, "r")
	string_f = f.read()
	print string_f
	f.close()
	f1= open(file, "w")
	f1.write('<script src="myfunction_rep.js"></script>' + "\n" + string_f);
	f1.close()

for file in glob.glob("*.js"):
    array_f.append(file)
    print(file)

for file in array_f:
	replace_string(file)

