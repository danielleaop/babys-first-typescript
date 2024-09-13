# helping stitch with Typescript(TS)

## so hi... 👋🏾😌
![stitch wave and "hi" text](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXRvM293cTN0bWl4ejUzMHhmdmpjcnR3bXB1ajlkanpiYzV5anM3ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OnnUZxcHsbBN6/giphy.gif)

Welcome, welcome...
I am Danielle and I've been tasked with helping that wonderful, terrible creature above, Stitch, with Typescript.
- TypeScript is the BIG SISTER of JavaScript that adds static types, enabling developers to catch errors during development rather than at runtime. It supports all JavaScript features but adds type safety, interfaces, and generics, making code more predictable and maintainable in large projects.
Stitch is a great programmer but quite lazy, follow along with this README on your browser and let's show him how it's done!
![stitch fed up](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dzbGppN295NmhtemdtdjIzOTJtZW1heTJ3dzQ5NDNiemtuOHp6bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tBGsxbT8gnAVq/giphy.gif)
![stitch wiggling his butt](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajl2bGt6MjN3dHN0b3g2MHQ3NjgxcGx6dDFpejUyd3gxeXMyMnJ2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VRyiBxgvy9H3y/giphy.gif)


## before we so much as dare begin this task...
- It is very important that you know some basic JavaScript. 
- It is also important that you have Typescript installed on your computer! You can use `tsc --version` to check if you do! If not, use `npm install -g typescript` to install and try again.
- Once that's done, FORK this repo with all branches. You can use the branches provided to check your solutions and help yourself if you get stuck!

## first things first...
![stitch fed up 2](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmFsZjVjaGJ4bGE1ejcyY2FtZnV3Y3U3cno1MWt5b2ppeTlnZDhiOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BbQrNk32kD064/giphy.gif)
1. once you open up the repo in your code editor of choice, you should see this README file, lazy Stitch's .js file and a tsconfig file also(did this for you so we can just focus on the fun stuff🤠)
2. change this .js file to a .ts file
3. now use the command `tsc` in your directory terminal to compile a dist folder with your .js file inside
4. you should see quite a few errors, let's try and help Stitch by correcting his .ts file (**NOT THE .JS FILE!!**)
5. make sure you delete the "dist" folder after each problem


## PROBLEM ONE
As you can see, Stitch is trying to evaluate his horrid vibe levels... not looking too great, I'm afraid. 
![stitch bad levels](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3dmZjZ5aTkxeTZxYzZoZ3pjaW5jcDhncHdtcHl5dm0xZHlsd2pmbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iHwg3fjBGabIY/giphy.gif)

Now, I know you see the errors. Let's try and use Typescript to establish rules first.
1. use `: type` notation at the end of each to make it clear what type each parameter and the function itself. (use the examples listed here https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions if you don't know how.)
2. now do some guided debugging in your .ts file and compile (feel to comment out the rest of the code if the red lines are annoying) 
3. check the "solutions" branch if you'd like and delete the "dist" file when you're done


## PROBLEM TWO
Stitch seems to have gotten a bit sentimental, bless him! He wants to express his appreciation to one of his favorite authors, but alas, the program is incomplete!
![stitch clapping evilly](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjRmNWRid2QzbTk3bjhwOGRxenhlZWF4ZWdlcmY2YnN4dzd1cmp2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/V5zZwAejmS58I/giphy.gif)

1. use the "interface" method explained here(https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces) to implement in his .ts file
2. do some debugging if necessary
3. check the "solutions" branch if you'd like and delete the "dist" file when you're done


## PROBLEM THREE
![stitch laughing maniacally](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzVlZmI0cXNveXAzYXlzc2NiZXVmaWRlMWJ3a2t0OXh1MjJ5cjllNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QgawLg4F0hJJe/giphy.gif)
This one is a doozy. Stitch has been snooping around Jumba's lab again and stole some secret files about his fellow experiments. He's written a function to print out info about these experiments, but once again, he forgot about the importance of types.

1. try and use Typescript to fix this and guide your debugging
2. check check the "solutions" branch if you get stuck!
