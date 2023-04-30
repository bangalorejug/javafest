In this small post we will see that how the execution of java program has changed in JDK11. Now, we can just compile and run a program in one line command.

>> cat HelloWorld.java

public class HelloWorld {
public static void main(String[] args) {
System.out.println("Welcome to JDK11");
}
}
>>./java HelloWorld.java

Welcome to JDK11
Under JEP 330, Launch Single-File Source-Code Programs. In JDK11, Java has enhanced the java launcher to run a program supplied as a single file of Java source code, including usage from within a script by means of “shebang” files and related techniques.

 

Lets see how the shebang files work for HelloWorld.java

>> cat hello

#!/Users/Vaibhav/bojug/jdk-11.jdk/Contents/Home/bin/java --source 11

public class HelloWorld {
public static void main(String[] args) {
System.out.println("Welcome to JDK11");
}
}
>> ./hello

Welcome to JDK11
 

This feature can be easily used for the utility files that need OS level support of Shebang.

Important to note ::

 java Factorial.java 3 4 5
is informally equivalent to

javac -d Factorial.java
java -cp Factorial 3 4 5
 

2. .class file will not stay after the execution of command.

 

More details ::

JEP Link : http://openjdk.java.net/jeps/330
Issue Link: https://bugs.openjdk.java.net/browse/JDK-8192920
Source change: http://hg.openjdk.java.net/jdk/jdk/rev/f91927a2c8d3 (look for the /javac/launcher/Main.java)
