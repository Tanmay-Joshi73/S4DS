import React from 'react';

import { BookOpen, Code, ChevronRight } from 'lucide-react';

const Basic = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <a href="/resources" className="hover:text-emerald-200">Resources</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/resources/beginner" className="hover:text-emerald-200">Beginner Path</a>
            <ChevronRight className="w-4 h-4" />
            <span>Python Basics</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Python Basics</h1>
          <p className="text-xl opacity-90">Master the fundamentals of Python programming</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-emerald-500 p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                <h2 className="text-2xl font-bold">1. Introduction to Python</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Python is an easy-to-learn, powerful, and versatile programming language. It is known for its simplicity 
                and readability, which makes it a great choice for beginners.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Your First Python Program</h3>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <code className="text-green-400">
                    # Python program to print "Hello, World!"<br />
                    print("Hello, World!")
                  </code>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>The print() function is used to output the message to the screen</li>
                    <li>Python uses indentation (typically 4 spaces) to define blocks of code</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Variables and Data Types Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-emerald-500 p-8">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-emerald-500 mr-2" />
                <h2 className="text-2xl font-bold">2. Variables and Data Types</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Python supports various data types, such as integers, floats, strings, and booleans. Variables are used to store these different types of data.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Working with Different Data Types</h3>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <code className="text-green-400">
                    # Variables and Data Types<br />
                    integer_var = 10         # Integer<br />
                    float_var = 10.5         # Float<br />
                    string_var = "Hello!"    # String<br />
                    boolean_var = True       # Boolean<br />
                    <br />
                    print(integer_var)<br />
                    print(float_var)<br />
                    print(string_var)<br />
                    print(boolean_var)
                  </code>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Variables hold data and can be assigned values of different types</li>
                    <li>Python is dynamically typed - no need to declare variable types</li>
                    <li>Variable names are case-sensitive and must start with a letter or underscore</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Structures Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-emerald-500 p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                <h2 className="text-2xl font-bold">3. Data Structures</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Python offers powerful built-in data structures like lists, tuples, dictionaries, and sets.
              </p>

              {/* Lists Section */}
              <h3 className="text-lg font-semibold mb-3">Lists</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400">
                  # List operations<br />
                  my_list = [1, 2, 3, 4, 5]<br />
                  my_list.append(6)  # Appending an element<br />
                  my_list.remove(2)  # Removing an element<br />
                  sliced_list = my_list[1:4]  # Slicing the list<br />
                  print(my_list)<br />
                  print(sliced_list)
                </code>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Lists are ordered, mutable collections</li>
                  <li>Elements can be added, removed, or accessed by indexing</li>
                  <li>Slicing allows you to extract sublists</li>
                </ul>
              </div>

              {/* Tuples Section */}
              <h3 className="text-lg font-semibold mb-3">Tuples</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400">
                  # Tuple operations<br />
                  my_tuple = (1, 2, 3, 4, 5)<br />
                  # Tuples are immutable, so we cannot modify them<br />
                  print(my_tuple)
                </code>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Tuples are immutable, meaning they cannot be changed after creation</li>
                  <li>They can be used as keys in dictionaries</li>
                </ul>
              </div>

              {/* Dictionaries Section */}
              {/* <h3 className="text-lg font-semibold mb-3">Dictionaries</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400">
                  # Dictionary operations<br />
                  my_dict = {'name': 'Alice', 'age:' 25, 'city:' 'Wonderland'}<br />
                  my_dict['age'] = 26  # Modifying an element<br />
                  my_dict['job'] = 'Engineer'  # Adding a new key-value pair<br />
                  print(my_dict)
                </code>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Dictionaries store data in key-value pairs</li>
                  <li>Keys must be unique and immutable (e.g., strings, numbers)</li>
                </ul>
              </div> */}

              {/* Sets Section */}
              <h3 className="text-lg font-semibold mb-3">Sets</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400">
                  # Set operations<br />
                  {/* my_set = {1, 2, 3, 4, 5}<br /> */}
                  my_set.add(6)  # Adding an element<br />
                  my_set.remove(3)  # Removing an element<br />
                  print(my_set)
                </code>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Sets are unordered collections of unique elements</li>
                  <li>They support mathematical set operations like union, intersection, and difference</li>
                </ul>
              </div>
            </div>
          </section>

          {/* File Input/Output Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-emerald-500 p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                <h2 className="text-2xl font-bold">4. File Input/Output</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Python provides built-in functions to handle files, including reading and writing text files, CSV, JSON, and binary files.
              </p>

              {/* Reading and Writing Text Files */}
              <h3 className="text-lg font-semibold mb-3">Reading and Writing Text Files</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400">
                  # Reading and writing text files<br />
                  with open('file.txt', 'w') as f:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;f.write("Hello, World!")<br />
                  with open('file.txt', 'r') as f:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;content = f.read()<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(content)
                </code>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use the `with` statement to automatically close the file</li>
                  <li>Use 'r' for reading, 'w' for writing, and 'a' for appending files</li>
                </ul>
              </div>

              {/* Reading and Writing CSV Files */}
              <h3 className="text-lg font-semibold mb-3">Reading and Writing CSV Files</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400">
                  # Reading and writing CSV files<br />
                  import csv<br />
                  # Writing to a CSV<br />
                  with open('data.csv', 'w', newline='') as f:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;writer = csv.writer(f)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;writer.writerow(['Name', 'Age'])<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;writer.writerow(['Alice', 25])<br />
                  # Reading from a CSV<br />
                  with open('data.csv', 'r') as f:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;reader = csv.reader(f)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;for row in reader:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(row)
                </code>
              </div>

              {/* Reading and Writing JSON Files */}
              <h3 className="text-lg font-semibold mb-3">Reading and Writing JSON Files</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400">
                  # Reading and writing JSON files<br />
                  import json<br />
                  # Writing to a JSON<br />
                  {/* data = {"name: Alice", "age": 25}<br /> */}
                  with open('data.json', 'w') as f:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;json.dump(data, f)<br />
                  # Reading from a JSON<br />
                  with open('data.json', 'r') as f:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;content = json.load(f)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(content)
                </code>
              </div>

              {/* Working with Binary Files */}
              <h3 className="text-lg font-semibold mb-3">Working with Binary Files</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400">
                  # Reading and writing binary files<br />
                  data = b'Hello, World!'<br />
                  with open('file.bin', 'wb') as f:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;f.write(data)<br />
                  with open('file.bin', 'rb') as f:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;content = f.read()<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(content)
                </code>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use 'wb' for writing and 'rb' for reading binary files</li>
                  <li>Binary files contain raw data (e.g., images, audio, etc.)</li>
                </ul>
              </div>
            </div>
          </section>



         <section className="bg-white rounded-xl shadow-lg overflow-hidden">
  <div className="border-l-4 border-emerald-500 p-8">
    <div className="flex items-center mb-4">
      <Code className="w-6 h-6 text-emerald-500 mr-2" />
      <h2 className="text-2xl font-bold">.5 Functions</h2>
    </div>
    <p className="text-gray-600 mb-6">
      Functions in Python are defined using the `def` keyword. Functions can take arguments and return values. Lambda functions are anonymous functions defined using the `lambda` keyword. Closures are functions that remember the environment in which they were created.
    </p>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Defining and Calling Functions</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Defining a function<br />
          def greet(name):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return f"Hello, {name}!"<br />
          <br />
          # Calling a function<br />
          print(greet("Alice"))
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Functions are defined using the `def` keyword.</li>
          <li>Functions can return values using the `return` keyword.</li>
          <li>Arguments can be passed to functions to customize behavior.</li>
        </ul>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Function Arguments and Return Types</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Function with multiple arguments<br />
          def add_numbers(a, b):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return a + b<br />
          <br />
          # Calling the function<br />
          print(add_numbers(5, 10))  # Output: 15
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Functions can take multiple arguments.</li>
          <li>Arguments can have default values when not provided.</li>
          <li>Functions return values using the `return` keyword.</li>
        </ul>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Lambda Functions</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Lambda function (anonymous function)<br />
          square = lambda x: x * x<br />
          <br />
          # Calling the lambda function<br />
          print(square(4))  # Output: 16
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Lambda functions are small anonymous functions.</li>
          <li>They are defined using the `lambda` keyword.</li>
          <li>Lambda functions can be used for short operations and are often passed as arguments.</li>
        </ul>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Closures</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Closure example<br />
          def outer_function(outer_variable):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def inner_function(inner_variable):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return outer_variable + inner_variable<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return inner_function<br />
          <br />
          # Using closure<br />
          closure_func = outer_function(10)<br />
          print(closure_func(5))  # Output: 15
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>A closure is a function that retains access to its lexical scope even after the outer function has finished executing.</li>
          <li>Closures are useful for creating functions with "memory" of the environment in which they were created.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      

<section className="bg-white rounded-xl shadow-lg overflow-hidden">
  <div className="border-l-4 border-emerald-500 p-8">
    <div className="flex items-center mb-4">
      <Code className="w-6 h-6 text-emerald-500 mr-2" />
      <h2 className="text-2xl font-bold">7. Object-Oriented Programming (OOP)</h2>
    </div>
    <p className="text-gray-600 mb-6">
      Object-Oriented Programming (OOP) in Python allows you to organize code into classes and objects. It emphasizes the concepts of inheritance, polymorphism, encapsulation, and abstraction to create reusable and modular code.
    </p>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Classes and Objects</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Defining a class and creating an object<br />
          class Person:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, name, age):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = name<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.age = age<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def introduce(self):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"Hi, I am {self.name} and I am {self.age} years old."<br />
          <br />
          # Creating an object<br />
          person1 = Person("Alice", 30)<br />
          print(person1.introduce())  # Output: Hi, I am Alice and I am 30 years old.
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>A class is a blueprint for creating objects.</li>
          <li>Objects are instances of a class with specific attributes and methods.</li>
          <li>Methods are functions that belong to a class and define its behavior.</li>
        </ul>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Constructors and Destructors</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Constructor and Destructor<br />
          class Car:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, model, year):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.model = model<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.year = year<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def __del__(self):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{self.model} object is being destroyed")<br />
          <br />
          # Creating an object<br />
          car1 = Car("Tesla", 2022)<br />
          del car1  # This will call the destructor and print the message
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>The `__init__` method is the constructor, used to initialize an object.</li>
          <li>The `__del__` method is the destructor, called when an object is destroyed.</li>
        </ul>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Attributes and Methods</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Attributes and Methods<br />
          class Dog:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, name, breed):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = name  # Attribute<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.breed = breed  # Attribute<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def bark(self):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"{self.name} is barking!"  # Method<br />
          <br />
          # Creating an object<br />
          dog1 = Dog("Rex", "German Shepherd")<br />
          print(dog1.bark())  # Output: Rex is barking!
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Attributes are variables that store data within a class.</li>
          <li>Methods are functions that define the behavior of a class and are called on objects.</li>
        </ul>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Inheritance</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Inheritance example<br />
          class Animal:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def speak(self):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Animal sound"<br />
          <br />
          class Dog(Animal):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def speak(self):  # Method Overriding<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Woof!"<br />
          <br />
          # Creating an object of the subclass<br />
          dog1 = Dog()<br />
          print(dog1.speak())  # Output: Woof!
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Inheritance allows a class to inherit attributes and methods from another class.</li>
          <li>Method overriding can be used to modify or extend the behavior of inherited methods.</li>
        </ul>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Polymorphism</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Polymorphism example<br />
          class Cat:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def speak(self):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Meow!"<br />
          <br />
          class Dog:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def speak(self):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Woof!"<br />
          <br />
          # Polymorphism: different objects, same method name<br />
          def animal_sound(animal):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return animal.speak()<br />
          <br />
          # Creating objects<br />
          cat1 = Cat()<br />
          dog1 = Dog()<br />
          print(animal_sound(cat1))  # Output: Meow!<br />
          print(animal_sound(dog1))  # Output: Woof!
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Polymorphism allows different classes to implement methods with the same name.</li>
          <li>It enables objects of different types to be treated as objects of a common superclass.</li>
        </ul>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Encapsulation</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Encapsulation example<br />
          class Account:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, balance):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.__balance = balance  # Private attribute<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def get_balance(self):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self.__balance  # Getter method<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def set_balance(self, amount):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if amount = 0:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.__balance = amount  # Setter method<br />
          <br />
          # Creating an object<br />
          account1 = Account(1000)<br />
          print(account1.get_balance())  # Output: 1000
          account1.set_balance(1500)  # Changing balance<br />
          print(account1.get_balance())  # Output: 1500
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Encapsulation is the concept of restricting access to certain details of an object.</li>
          <li>Private attributes are prefixed with `__` to make them inaccessible from outside the class.</li>
          <li>Getter and setter methods allow controlled access to private attributes.</li>
        </ul>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Abstraction</h3>
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <code className="text-green-400">
          # Abstraction example<br />
          from abc import ABC, abstractmethod<br />
          <br />
          class Shape(ABC):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;@abstractmethod<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def area(self):  # Abstract method<br />
          &nbsp;&nbsp;&nbsp;&nbsp;pass<br />
          <br />
          class Circle(Shape):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, radius):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.radius = radius<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def area(self):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 3.14 * self.radius ** 2  # Circle area<br />
          <br />
          # Creating an object<br />
          circle = Circle(5)<br />
          print(circle.area())  # Output: 78.5
        </code>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Key Points:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Abstraction hides the implementation details and shows only the essential features of an object.</li>
          <li>Abstract classes contain abstract methods that must be implemented by subclasses.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

          

          {/* Navigation Buttons */}
          
          <div className="flex justify-between pt-8">
          <a href='/resources'>
            <button className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
              ← Previous Topic
            </button>
            </a>
            <a href='/resources/MachineLearning'><button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              Next Topic →
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
