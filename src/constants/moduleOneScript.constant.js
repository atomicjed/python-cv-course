import {
  breakContinue,
  combineStatementsWithAnd,
  combineStatementsWithOr,
  conditionalQuiz,
  dataStructuresTable,
  dictConsole,
  dictExample,
  elifElse,
  forLoopExample,
  functionExample,
  helloWorldConsole,
  identityOperator,
  indentation,
  lenExample,
  listIndex, loopQuiz,
  mainPy,
  memoryThumb,
  newTerminal,
  oneLiner,
  openFolder,
  paramsConsole,
  paramsExample,
  returnExample,
  setsExample,
  stackNHeap,
  tupleExample,
  variableQuiz,
  whileExample
} from "../assets/index.js";

export const module1NavItems = [
  {
    id: "0",
    title: "Intro",
    url: "#introduction",
  },
  {
    id: "1",
    title: "Data Types",
    url: "#data-types",
  },
  {
    id: "5",
    title: "Data Structures",
    url: "#data-structures"
  },
  {
    id: "2",
    title: "Conditionals",
    url: "#conditionals",
  },
  {
    id: "3",
    title: "Loops",
    url: "#loops",
  },
  {
    id: "4",
    title: "Functions",
    url: "#functions"
  }
];

export const whatIsPythonContent = [
  {
    title: "What is Python?"
  },
  {
    text: "Python is a popular and versatile programming language used in fields like data analysis, backend web development, artificial intelligence, machine learning, scientific computing, and automation."
  },
  {
    text: "Python's syntax is designed to be clean and easy to read, making it beginner-friendly while being powerful for advanced tasks. It also has extensive library support, which allows developers to efficiently handle common tasks (you’ll learn more about these in later modules)."
  },
  {
    ytVideoUrl: "https://www.youtube.com/embed/xkZMUX_oQX4?si=1D5pXiIdT7Ik1vBk"
  },
  {
    text: "Lets get a simple Python program running on your machine."
  },
  {
    list: [
      {bulletPoint: "Download and install python from:"},
      {link: {link:"https://www.python.org/downloads/", name: "Download Python"}},
      {bulletPoint: "Download and install Visual Studio Code (VS Code) from:"},
      {link: {link:"https://code.visualstudio.com/download", name: "Download Visual Studio Code"}},
      {bulletPoint: "Open up your IDEA and go into an empty folder. Inside this folder, create a file named main.py (the .py extension indicates a python file). In this file, type:"},
      {bulletPoint: "print(\"Some text here\")"},
      {
        images: [
          {image: openFolder, alt: ""},
          {image: mainPy, alt: ""},
        ]
      },
      {bulletPoint: "I promise that's the last Forest reference! Save your file by pressing Cmd + S (Mac) or Ctrl + S (Windows). Now open up a terminal inside your IDE by going to Terminal => New Terminal. Run the programing by typing the following command and pressing enter:"},
      {bulletPoint: "python3 main.py"},
      {images: [{image: newTerminal, alt: ""}, {image: helloWorldConsole, alt: ""}]},
      {bulletPoint: "If your terminal displays the text you entered, you’ve successfully installed Python and executed your first program, well done!"}
    ]
  }
];

export const dataTypesContent = [
  {
    title: "Data Types and Variables"
  },
  {
    text: "A variable is a named reference to a value stored in memory. It allows you to store, retrieve and manipulate data throughout your program. There are a few naming rules you should be aware of:"
  },
  {
    ytVideoUrl: "https://www.youtube.com/embed/Hsbo6V2BJ3U?si=pGL1wsF7gLrndv9j"
  },
  {
    text: "Learn more about variables here:"
  },
  {
    link: {link: "https://www.w3schools.com/python/python_variables.asp", name: "Python Variables"}
  },
  {
    text: "In programming, data types are a very important concept because they determine how variables can be used and manipulated. Variables can store data of various types. The most common are:"
  },
  {
    list: [
      {bulletPoint: "Text (string) data is defined using either single or double quotes. The type is str (short for string). Example: \"Hello\" or 'World'."},
      {bulletPoint: "Numeric data has a few types like int (integer) or float (floating-point like 3.14). Floats are essentially decimal numbers but are not 100% accurate, e.g., in Python, 0.1 + 0.2 results in 0.30000000000000004, this is because computers use binary to represent floats, and some decimal fractions like 0.1 cannot be represented exactly in binary, leading to small rounding errors. Floats are great for 99% of examples as they are optimised for performance. However, in cases like financial calculations where exact precision is essential, Python's Decimal library can be used as it stores numbers in base 10 to avoid small rounding errors. Don't worry too much, floats are close enough for most use cases."},
      {bulletPoint: "A boolean (bool) data type represents values that is either True or False."}
    ]
  },
  {
    text: "Understanding these data types is important because they determine how variables can be used and manipulated in your program. Misunderstanding these data types will lead to errors and unexpected behaviour."
  },
  {
    text: "I strongly recommend going through the resources of each of these data types and concepts until you’re happy with them:"
  },
  {
    list: [
      {link: {link:"https://www.w3schools.com/python/python_datatypes.asp", name:"Python Datatypes"}},
      {link: {link: "https://www.w3schools.com/python/python_numbers.asp", name: "Python Numbers"}},
      {link: {link:"https://www.w3schools.com/python/python_casting.asp", name: "Python Casting"}},
      {link: {link: "https://www.w3schools.com/python/python_strings.asp", name: "Python Strings"}},
      {link: {link: "https://www.w3schools.com/python/python_booleans.asp", name: "Python Booleans"}},
    ]
  },
  {
    text: "Operators allow you to manipulate data, make comparisons, and perform mathematical calculations. There are various types of operators:"
  },
  {
    list: [
      {bulletPoint: "Arithmetic operators for basic maths operations like a + b."},
      {bulletPoint: "Assignment operators to assign values to variables like x = 5."},
      {bulletPoint: "Comparison operators to compare two values and return a boolean result (True or False) like x == y."},
      {bulletPoint: "Logical operators to combine conditional statements like x < 5 and x< 10."},
      {bulletPoint: "Identity operators check if two variables refer to the same object in memory, not the values. Don’t worry about this right now we’re gonna come back to this at the end of the module."},
    ]
  },
  {
    text: "Use this resource to familiarise yourself:"
  },
  {
    link: {link: "https://www.w3schools.com/python/python_operators.asp", name: "Python Operators"}
  },
  {
    images: [{image: variableQuiz, alt: ""}],
  },
  {
    quiz: {
      question: 'What would the program above print?',
      options: [{option: 'The amount of European Championships Forest have (2)', correctAnswer: true}, {option: '3', correctAnswer: false}, {option: '0', correctAnswer: false}],
      explanation: 'The a += b assignment operator it the same as saying a = a + b. The modulus operator a % b gives the remainder of a divided by b'
    }
  },
  {
    quiz: {
      question: 'What would the following code print: print(float(35))',
      options: [{option: '35', correctAnswer: false}, {option: '30', correctAnswer: false}, {option: '35.0', correctAnswer: true}],
      explanation: 'The float() function in Python converts a number or a string that represents a number into a floating-point number. 35 is an integer, so float(35) converts it into a floating-point number by appending .0.'
    }
  }
];

export const conditionalStatementsContent = [
  {
    title: "Conditionals"
  },
  {
    text: "Conditionals allow you to make decisions in your code, letting you execute certain actions only when specific conditions are true."
  },
  {
    text: "An if statement contains a block of code which it executes if a certain logical condition is true."
  },
  {
    text: "Python relies on indentation (spaces/tabs at the beginning of the line) to define which code belongs to this if statement. For example: "
  },
  {
    images: [
      {image: indentation, alt: ""}
    ]
  },
  {
    text: "The elif keyword (short for else if) says: “If the previous conditions were not true, then try this condition”. Whereas, the else keyword runs a block of code if none of the previous if or elif conditions are true. For example: "
  },
  {
    images: [
      {image: elifElse, alt: ""}
    ]
  },
  {
    text: "You can write short if statements on a single line for simplicity, like this:"
  },
  {
    images: [
      {image: oneLiner, alt: ""}
    ]
  },
  {
    text: "You can combine conditional statements using the and keyword or the or keyword. For example:"
  },
  {
    images: [
      {image: combineStatementsWithAnd, alt: ""},
      {image: combineStatementsWithOr, alt: ""}
    ]
  },
  {
    text: "You can read more about conditionals here:"
  },
  {
    link: {link: "https://www.w3schools.com/python/python_conditions.asp", name: "Python Conditionals"}
  },
  {images: [{image: conditionalQuiz, alt: ""}]},
  {
    quiz: {
      question: 'What will the code above output?',
      options:[{option: 'Condition Met', correctAnswer: true}, {option: 'Condition Not Met', correctAnswer: false}, {option: 'Error', correctAnswer: false}, {option: 'Nothing', correctAnswer: false}],
      explanation: 'The if statement uses a logical AND (and) to check if both conditions are true: x > 3 is True because x is 5. y < 15 is True because y is 10. Since both conditions are true, the condition within the if statement is met, and the block of code under the if statement executes, printing "Condition Met". If either condition were false, the else block would have executed.'
    },
  }
];

export const dataStructuresContent = [
  {
    title: "Data Structures"
  },
  {
    text: "Data structures allow you to organise and store collections of data so you can access it and manipulate it in your program. There are 4 built in data types in Python used to store collections of data: Lists, Tuples, Sets and Dictionaries. You will use these in most of the programs you write so they are really worth studying and understanding."
  },
  {
    text: "Lists are enclosed in square brackets [] and have 3 characteristics."
  },
  {
    list: [
      {bulletPoint: "They are ordered. If you want to retrieve an item in a List, you would typically provide the index of the item like so:"},
      {images: [{image: listIndex, alt: ""}]},
      {bulletPoint: "They allow duplicates. Since lists are indexed, lists can have items with the same value because items will always be differentiated by their index."},
      {bulletPoint: "They are changeable meaning you can add/update/remove items."},
      {bulletPoint: "I recommend you read more about how you access and manipulate items in a List using these resources: "},
      {link: {link:"https://www.w3schools.com/python/python_lists_access.asp", name: "Python Lists Access"}},
      {link: {link:"https://www.w3schools.com/python/python_lists_change.asp", name: "Python Lists Change"}},
      {link: {link: "https://www.w3schools.com/python/python_lists_add.asp", name: "Python Lists Add"}},
      {link: {link: "https://www.w3schools.com/python/python_lists_remove.asp", name: "Python Lists Remove"}}
    ]
  },
  {
    text: "Tuples are enclosed in parentheses () and have 3 characteristics."
  },
  {
    list: [
      {bulletPoint: "They are ordered, the items have a defined order that will not change. Like a List, the first item has index [0], the second has index [1] etc."},
      {bulletPoint: "They are unchangeable, we cannot change, add or remove items after a tuple has been created."},
      {bulletPoint: "They allow duplicates, since they are indexed much like a List."}
    ]
  },
  {
    text: "When would you use a tuple? You would typically use a tuple when data integrity is important and you want to ensure the data cannot be accidentally modified."
  },
  {
    text: "To create a tuple with only one item, you have to add a comma after the item, otherwise Python won’t recognise it as a tuple:"
  },
  {
    images: [
      {image: tupleExample, alt: ""}
    ],
  },
  {
    text: "Accessing and manipulating tuples is very similar to accessing and manipulating Lists but with a few twists. I recommend you have a quick skim over the following resources:"
  },
  {
    list: [
      {link: {link:"https://www.w3schools.com/python/python_tuples_access.asp", name: "Python Tuples Access"}},
      {link: {link: "https://www.w3schools.com/python/python_tuples_update.asp", name: "Python Tuples Update"}},
      {link: {link: "https://www.w3schools.com/python/python_tuples_unpack.asp", name: "Python Tuples Unpack"}},
    ]
  },
  {
    text: "Dictionaries are enclosed in curly braces {} and are used to store data values in key:value pairs. Dictionaries have the following 3 characteristics."
  },
  {
    list: [
      {bulletPoint: "They are ordered (kind of). Dictionaries are ordered as of Python 3.7, meaning they preserve the order in which items are added. However, unlike lists, dictionaries are accessed using their unique keys rather than indices."},
      {bulletPoint: "They are changeable."},
      {bulletPoint: "Duplicates are not allowed. Dictionaries cannot have two items with the same key. Duplicate values will overwrite existing values, for example: "},
      {images: [
          {image: dictExample, alt: ""},
          {image: dictConsole, alt: ""}
        ]
      }
    ]
  },
  {
    text: "Why are dictionaries used?"
  },
  {list: [
      {bulletPoint: "Dictionaries allow for very fast lookups: you can access values using their keys very quickly."},
      {bulletPoint: "Dictionaries can store any type of data as both keys and value. This allows them to represent complex data structures like nested data."}
    ]},
  {
    text: "These perks mean dictionaries are ideal for data modelling and are often used to structure modern databases."
  },
  {
    text: "I recommend you to give the following resources a quick look over. Hopefully you can start to see the similarities and overlap between these different data structures: "
  },
  {list: [
      {link: {link: "https://www.w3schools.com/python/python_dictionaries.asp", name: "Python Dictionaries"}},
      {link: {link: "https://www.w3schools.com/python/python_dictionaries_access.asp", name: "Python Dictionaries Access"}},
      {link: {link: "https://www.w3schools.com/python/python_dictionaries_change.asp", name: "Python Dictionaries Change"}},
      {link: {link: "https://www.w3schools.com/python/python_dictionaries_add.asp", name: "Python Dictionaries Add"}},
      {link: {link: "https://www.w3schools.com/python/python_dictionaries_remove.asp", name: "Python Dictionaries Remove"}},
    ]},
  {
    text: "Finally, Sets are enclosed in curly braces {} and have the following characteristics."
  },
  {
    list: [
      {bulletPoint: "They are unordered. Set items can appear in a different order every time you use them and cannot be referred to by an index or key."},
      {bulletPoint: "They are unchangeable. Items cannot be added/changes/removed"},
      {bulletPoint: "They don’t allow duplicates, since items cannot be distinguished by key or index."},
    ]
  },
  {
    text: "Why use sets? You would typically use a set to eliminate duplicates from a list/sequence. Sets also allow you to perform mathematical operations to compare two sets. For example:"
  },
  {
    images: [
      {image: setsExample, alt: ""}
    ]
  },
  {
    text: "Often in programming, it is useful to know the number of items in a collection. Python provides the built-in len() function, which returns the number of items in a collection."
  },
  {
    images: [
      {image: lenExample, alt: ""}
    ]
  },
  {
    text: "This is a big topic, so good job for keeping up. Here is a summary of what we’ve gone through:"
  },
  {
    images: [{image: dataStructuresTable, alt: ""}]
  },
  {
    quiz: {
      question: 'How would you access the second element in the list my_list = [10, 20, 30]?',
      options: [{option: 'my_list(1)', correctAnswer: false}, {option: 'my_list[2]', correctAnswer: false}, {option: 'my_list[1]', correctAnswer: true}, {option: 'my_list{1}', correctAnswer: false}],
      explanation: 'Python uses zero-based indexing, meaning the first element has an index of 0, the second element has an index of 1, and so on.'
    },
  },
  {
    quiz: {
      question: 'Which data structure would be best suited for eliminating duplicate values from a list?',
      options: [{option: 'List', correctAnswer: false}, {option: 'Tuple', correctAnswer: false}, {option: 'Dictionary', correctAnswer: false}, {option: 'Set', correctAnswer: true}],
      explanation: 'Sets automatically eliminate duplicates because they only store unique elements since items cannot be distinguished by key or index.'
    }
  }
];

export const loopsContent = [
  {
    title: "Loops"
  },
  {
    text: "We use loops to execute the same block of code a desired number of times, making it a powerful tool for automating repetitive tasks. They can simplify your code and remove duplicated code."
  },
  {
    text: "A for loop is used to iterate over a sequence like a list, tuple or string, or a range of numbers. It executes the code block once for each item in the sequence."
  },
  {
    images: [
      {image: forLoopExample, alt: ""}
    ]
  },
  {
    text: "A while loop runs as long as a condition is true. This is useful when the number of iterations isn’t predetermined."
  },
  {
    images: [
      {image: whileExample, alt: ""}
    ]
  },
  {
    text: "To control the behaviour of loops, Python provides two special keywords, break and continue. Break exits the loop immediately, and continue skips the rest of the code in the current iterations and moves onto the next one."
  },
  {
    images: [
      {image: breakContinue, alt: ""}
    ]
  },
  {
    text: "It might be useful to do some extra reading on these two loops:"
  },
  {
    list: [
      {link: {link: "https://www.w3schools.com/python/python_while_loops.asp", name: "Python While Loops"}},
      {link: {link: "https://www.w3schools.com/python/python_for_loops.asp", name: "Python For Loops"}},
    ]
  },
  {
    images: [{image: loopQuiz, alt: ''}],
  },
  {
    quiz: {
      question: 'What will the code above output?',
      options: [{option: '0 1 2 3', correctAnswer: false}, {option: '0 1 2', correctAnswer: true}, {option: '1 2 3', correctAnswer: false}, {option: '0 1 2 3 4', correctAnswer: false}],
      explanation: 'The for loop iterates over the range 0, 1, 2, 3, 4. When i == 3, the break statement is executed, which immediately exits the loop, so the loop doesn\'t print 3 or go beyond it.'
    }
  }
];

export const functionsContent = [
  {
    title: "Functions"
  },
  {
    text: "Functions are reusable blocks of code that let you perform a specific task. They help make your code more organised, efficient, and easier to maintain. Functions can take inputs, called parameters, and can optionally return outputs using the return statement."
  },
  {
    text: "In Python, a function is defined using the def keyword followed by the function name parenthesis () and a colon :. Like if statements, a function relies on indentation to define what code belongs to the function. To call a function, use the function name followed by parenthesis. "
  },
  {
    images: [
      {image: functionExample, alt: ""}
    ]
  },
  {
    text: "You can pass data into a function by defining parameters in the parenthesis when you declare it. The actual values you provide when calling the function are known as arguments."
  },
  {
    images: [
      {image: paramsExample, alt: ""},
      {image: paramsConsole, alt: ""}
    ]
  },
  {
    text: "If you want your function to produce a result, you can use the return statement. This allows the function to output a value that you can store or use elsewhere in your program."
  },
  {images: [
      {image: returnExample, alt: ""}
    ]},
  {text: "Read up more about functions here:"},
  {
    list: [
      {link: {link: "https://www.w3schools.com/python/python_functions.asp", name: "Python Functions"}}
    ]
  }
];

export const memoryContent = [
  {
    title: "Computer Memory"
  },
  {
    video: {source: 'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/ComputerMemory.mp4?alt=media&token=a8415616-3418-4b3e-9524-5a8c76f33f65', thumbnail: memoryThumb}
  },
  {
    text: "Well done, if you’ve got this far through, you already know a lot of the basics, but it’s also useful to understand what a computer does while it’s running a program."
  },
  {
    text: "When a program runs, your machine uses two key areas of memory: the stack and the heap."
  },
  {
    text: "The stack stores small, temporary data when it’s needed. It’s organised in a stack—new data is added to the top, and it’s removed as soon as it’s no longer needed. Simple data types like numbers and characters, known as value types, are stored here. The stack is fast and efficient to retrieve data, but the stack has limited size. "
  },
  {
    text: "The heap, on the other hand, is larger and more flexible. It’s used for storing complex data like objects and arrays. However, it’s slower than the stack. To manage this, a reference to the data is stored on the stack, pointing to its actual location in the heap. This keeps the stack small and organised while allowing the program to indirectly access larger, more complex data. For this reason, complex data like objects and arrays are called reference types, as opposed to simple value types, which are stored directly on the stack."
  },
  {
    images: [{image: stackNHeap, alt: ""}]
  },
  {
    text: "Therefore, as we mentioned earlier, identity operators are used to compare objects—not by checking if they have the same value, but whether they are actually the same object with the same reference in memory."
  },
  {
    images: [{image: identityOperator, alt: ""}]
  },
  {
    text: "I know this is a lot to get your head around, but understanding this concept is useful because it’s commonly referenced when optimising programs, and similar principles are used when designing database structures. Also, if you encounter a StackOverflow error, it typically means your program has exceeded the stack’s memory limit, which often happens due to infinite recursion, which is just where a function endlessly calls itself, creating a loop that overflows the stack’s memory limit and causes your program to crash."
  },
  {
    text: "Well done, if that made any sense to you, don’t worry too much if it doesn’t. If you’ve got a good understanding of the concepts we’ve covered in this module, we are ready to move on to the next one, where we’re gonna build our first motion detection algorithm. At the bottom of this page, drop me a message saying you’re ready to go and I will make the next module available for you. That being said you can always come back to this module if you need to revisit anything you need to."
  },
]