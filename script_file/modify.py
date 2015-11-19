# array_sp = [
# 	['chrome.storage.local.get', 'mychrome_storage_local_get'],
# 	['chrome.storage.local.set', 'mychrome_storage_local_set'],
# 	['chrome.runtime.sendMessage', 'mychrome_runtime_sendmessag']
# 	]

array_sp = []

myfile = open('chrom_fname_pair.txt', "r")
for line in myfile:
	la = line.split()
	array_sp.append(la)



def replace_string(file_name):
	myfile =  open(file_name, "r")
	string_f = myfile.read();
	print string_f
	myfile.close();


	for pair in array_sp:
		string_f = string_f.replace(pair[0], pair[1])
		# print string_f

	myfile1 = open(file_name, "w")
	myfile1.write(string_f);
	myfile1.close();

