cd desktop 
mkdir script
cd script
touch file.txt
echo "Hello World" >> file.txt
ls
echo -n "The contents of the file is : " | cat - file.txt

//in the echo command above the -n is used to print the content of both command in same line.
// the ( | and - ) is used for the simultaneous execution of commands on same line.
