#!/bin/sh

echo "Send me an email" | mail -s "Let's chat." isaiahgrey@gmail.com

echo "Which account would you like to see, my github, linkedin, or twitter?"
read accountname

if [ "$accountname" == twitter ]; then
  open https://twitter.com/isaiahgrey93
elif [ "$accountname" == github ]; then
  open https://github.com/isaiahgrey93
elif [ "$accountname" == linkedin ]; then
  open https://linkedin.com/in/isaiahgrey
fi

echo "Thanks for looking!"