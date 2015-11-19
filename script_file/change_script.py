import os
import sys

chrom_scnfn = sys.argv[1] 


def convert_fname(fname):
	string_m1 = fname.replace(".", "_");
	string_m1 = "my" + string_m1;
	return string_m1;

def create_ver(no_ver):
	s1="";
	for i in range(int(no_ver)):
		if(i==0):
			s1= s1 + "a" + str(i);
		else:
			s1= s1 + ", a" + str(i);
	return s1;

def write_script_function(fname, no_ver):
	string_o = fname;
	string_m = convert_fname(fname);
	string_v = create_ver(no_ver);
	string_tor = "function " + string_m +"(" + string_v +")" + "{\n\t" + "console.log( \"inside "  +fname + "\");\n\t"+ "return " + string_o + "(" + string_v +");\n }\n" ;
	return string_tor;


myfile = open(chrom_scnfn, "r")
for line in myfile:
	la = line.split()
	string_mc = convert_fname(la[0])
	string_fofun = write_script_function(la[0], la[1])	
	myfile2 = open('myfunction_rep.js', "a");
	myfile2.write(string_fofun);
	myfile2.close();
	myfile3 = open('chrom_fname_pair.txt', "a");
	myfile3.write(la[0] + " " + string_mc +"\n");
	myfile3.close();

myfile.close();




