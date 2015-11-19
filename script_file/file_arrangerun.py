import os
import sys

cuuent_dir = os.getcwd()

extension_path = sys.argv[1]
print extension_path

os.system("cp ./directory_file.py " +"'" +extension_path +"'");
os.system("cp ./modify.py " +"'"+ extension_path +"'");
os.system("cp ./mm.py " +"'"+ extension_path +"'");
os.system("cp ./chrom_fname_pair.txt " +"'"+ extension_path +"'");
os.chdir(extension_path)
os.system("ls")
os.system("python directory_file.py")
os.system("python mm.py manifest.json \"myfunction_rep.js\"")
print os.getcwd()
os.chdir(cuuent_dir)
os.system("cp ./myfunction_rep.js " +"'"+ extension_path +"'");
os.chdir(extension_path)
os.system("ls")