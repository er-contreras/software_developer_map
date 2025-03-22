#!usr/bin/bash

echo Hello there \
  my name is...

echo 'single quotes'
echo "double don't quotes \@ $"
echo "double \$ quotes"

echo $'Hello there Im \r playing with \n strings in bash'

echo $"Hello \a there I'm \r playing with \n strings in bash"

echo $"Hello, there"

echo >&2 "Error"

time

# mkdir ./new_dir || "Couldn't create directory my lord!"
# rm -rf ./new_dir && "Dir has been deleted"

# until mdkir new_dir; do touch ./new_dir/new_text.txt; done

# while test-commands; do consequent-commands; done
a=0
while ((a<3))
do
  echo "Hello index: $a"

  ((a+=1))
done

# for name [ [in [words ...] ] ; ] do commands; done
# for (( expr1 ; expr2 ; expr3 )) ; do commands ; done
# break and continue
for ((i = 0; i <= 10; i++));
do
  echo $i
done

if [[ $1 == 'Hello' ]]; then
  echo "You right!";
elif [[ $1 != 'Hello' ]]; then
  echo "Wrong answer"
else
  echo "Type something"
fi

echo -n "Enter the name of an animal: "
read ANIMAL
echo -n "The $ANIMAL has "

case $ANIMAL in
  horse | dog | cat) echo -n "four";;
  man | kangaroo) echo -n "two";;
  *) echo -n "an unknown number of";;
esac
echo " legs."

# select name [in words ...]; do commands; done
select fname in *;
do
  echo you picked $fname \($REPLY\)
  break;
done


