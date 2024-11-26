import {
  carDetection,
  cv2Error,
  module2One,
  stackOverflowCv2Error,
  tracebackError,
  respectGif,
  module2Two, module2Three, frameDelta, threshold, module2Four
} from "../assets/index.js";

export const module2NavItems = [
  {
    id: "0",
    title: "Fixing Bugs",
    url: "#fixing-bugs",
  },
  {
    id: "1",
    title: "Libraries",
    url: "#libraries",
  },
  {
    id: "2",
    title: "Computer Vision",
    url: "#computer-vision",
  },
  {
    id: "3",
    title: "Walkthrough",
    url: "#walkthrough",
  },
];

export const fixingBugsContent = [
  {
    title: "Fixing Bugs"
  },
  {
    text: "When developing any project, you're always likely to run into problems. This is for various reasons: system setup, lack of understanding, typos, and more. It’s the nature of developing software. Fortunately, for any problem you encounter, it’s likely that thousands of developers have run into it too, and the solutions will more often than not be posted on a website called Stack Overflow - you’re new best friend! For instance, while writing the code for this section, I couldn’t figure out why python wasn’t resolving a dependency I had just installed. A quick google on stack overflow and I soon found out I was using the wrong version of python in Visual Studio.",
  },
  {
    images: [{image: stackOverflowCv2Error, alt: 'A screenshot of my code showing the error that python couldn\'t resolve the cv2 dependency.'}, {image: cv2Error, alt: 'A screenshot of a stack overflow answer sharing the solution to the dependency issue I had.'}]
  },
  {
    text: "So, this is all well and good, but how do you know what the issue is that needs fixing in the first place? In Python, there are few ways to identify the problem:",
  },
  {
    list: [
      {bulletPoint: "Logs and error messages: When something goes wrong in your code, Python usually provides error messages with a traceback. The traceback shows where the error occurred and what went wrong."},
      {images: [{image: tracebackError, alt: 'A screenshot of a python traceback provided by an IDE'}]},
      {bulletPoint: "Given you’ve already written some code, you’ll have noticed most IDEs like PyCharm or VSCode offer built-in error checking, which helps you spot problems as you type. Red squiggly lines indicate errors that prevent your code from running. Common causes include: syntax errors, undefined variables, import errors or type errors. Yellow squiggly lines represent warnings, which don’t stop the program from running but suggest inefficiencies in code. This could be unused variables, deprecation warning logical errors, or performance issues."},
      {bulletPoint: "Print statements: If you’re unsure what’s happening in your code, adding print() statements to display variable values at key points can help you understand if your program is behaving the way it is expecting. For example, printing the value of a variable before and after a certain operation to test whether it’s being updated properly."}
    ]
  },
  {
    text: "At times, however, the solutions from other developers might not work because they weren’t dealing with the underlying cause of your issue. It can feel like the whole world is against you and your program will never work. But before you throw your laptop out the window, remember–you have my email! Feel free to reach out, and we can work through the problem together. This is actually a common practice called pair programming; sometimes all it takes is a fresh pair of eyes to find that missing piece."
  }
];

export const librariesContent = [
  {
    title: "Libraries"
  },
  {
    text: "The open-source community is amazing because it allows you to build applications and programs you never thought were possible. Open-source code is code that’s freely available for anyone to use, learn from and even contribute to. This community offers an incredible range of libraries–collections of code that other developers have written and shared. Libraries allow you to focus on creativity and problem solving, using tools that others have already perfected so you can focus on what matters most: bringing your ideas to life."
  },
  {
    text: "Python, in particular, has a thriving open-source community, which means there are libraries for nearly everything you can imagine! For the following example, we’ll be using popular libraries, NumPy for complex maths calculations, and OpenCV for computer vision. We’ll touch on them more later, so without further ado, let's get on to the good stuff!"
  }
];

export const computerVisionContent = [
  {
    title: "Computer Vision"
  },
  {
    text: "Computer vision is the field of enabling computers to see and interpret visual information like images and videos. Thanks to advancements in technology, we can now build some really cool projects. In this module, we’ll be focussing on motion detection to build a prototype security camera."
  },
  {
    text: "One fundamental technique in motion detection is background subtraction. This approach is used in many computer vision applications; we use it to count the number of cars passing in traffic, detect people entering a shop, and detect activity in security cameras like we will be doing soon."
  },
  {
    text: "Motion detection varies in complexity, but all methods share a common goal: separating the background from the foreground. Why is it important? In motion detection, we assume:"
  },
  {
    quote: '“The background of our video stream is largely static and unchanging over consecutive frames of a video. Therefore, if we can model the background, we monitor it for substantial changes. If there is a substantial change, we can detect it — this change normally corresponds to motion on our video.”'
  },
  {
    text: "In the real world, this can easily fail. Shadows, reflections, lighting conditions, and other changes to the environment can make our background look different in various frames, which can throw our algorithm off. This is why the most reliable motion detection systems have fixed cameras in controlled lighting conditions. "
  },
  {
    text: "By the end of this module, you’ll have built a security camera that detects foreground motion by comparing each frame with a stored background image."
  },
  {
    text: "Some advanced motion detection algorithms are very powerful, but also computationally expensive. We’ll return to these methods in the next module. For now, we’ll keep it simple and efficient. Here’s a high level overview of what we need our application to do:"
  },
  {
    list: [
      {bulletPoint: "Initially, we will detect the first frame of a video, and store this as the background."},
      {bulletPoint: "Then, we will iteratively compare each new frame with the background. To detect the difference between the two frames, we’ll subtract the *pixel intensity values (brightness or colour) of the background from those of the current frame. *Pixel intensity refers to the brightness or colour value of a pixel in the image or video frame. When comparing frames, differences in pixel intensity can show where motion has occurred."},
      {bulletPoint: "If there are significant changes in pixel intensity, and if the changed area is large enough, we’ll draw a box around the motion region and change the video’s status to “occupied”."}
    ]
  },
  {
    images: [
      {image: carDetection}
    ]
  },
  {
    text: "Don’t worry if this sounds complex—OpenCV will handle much of the heavy lifting for us. OpenCV is an open-source computer vision library, packed with tools for nearly any computer vision operation you might need."
  }
];

export const walkThrough = [
  {
    title: "Building a Security Camera Using OpenCV (step by step):"
  },
  {
    text: "Set up:"
  },
  {
    list: [
      {bulletPoint: "First, we need to install the imutils and OpenCV libraries. Open a terminal and run:"},
      {bulletPoint: "python3 -m pip install opencv-python imutils."},
      {bulletPoint: "Then, open up visual studio code, create a new folder, and add a file named motion_detector.py."},
      {images: [{image: module2One, alt: ""}]},
      {bulletPoint: "In lines 2-7 of the script, we import the necessary libraries and packages we’ll use. Next, we’ll set up some command-line options to give our program useful parameters when we run it."},
      {bulletPoint: "The first option, --video, is optional. If you include --video, you can specify a path to a pre-recorded video file where the program will look for motion. If you skip this option, the program will instead use your webcam to detect motion. The second option is --min-area, which sets the minimum pixel size for any detected area to be considered “motion.” This helps filter out minor changes, like slight lighting adjustments or random noise, that aren’t real motion.\n"},
      {bulletPoint: "Lines 16-22 set up our video source. We use a conditional statement to see if a video source has been provided. If a video hasn’t been provided, we connect to the webcam, and store a reference to it in the vs variable and wait a moment for it to start. If a video file is provided, we open the file on lines 21 and 22 and store a reference to it in the vs variable."},
      {bulletPoint: "After that, we create a variable called firstFrame. If you’ve stuck with me so far, you might have guessed the firstFrame stores the very first frame from the video/webcam feed to be used as the background image. And you’d be correct! For the sake of this exercise, we are making the assumption the first frame of our video file will contain no motion and just background."},
      {bulletPoint: "This is a lot to get your head round, especially as a beginner, big respect if you have followed along this far. If not, revisit the last section and understand what we want our program to do. So far, we’ve added command line parameters to our command line to customise how the program runs, using a conditional statement to see if a video file has been provided, if it hasn’t we start a video stream, otherwise, we use the openCV library to capture and store the video, and finally we define the firstFrame variable which we will use to store the background image later."},
      {images: [{image: respectGif, alt: ""}]},
      {images: [{image: module2Two, alt: ""}]},
      {bulletPoint: "Now we have a reference to our video file/webcam stream, we can start looping over each of the frames on line 28. We will do this using a while loop, which will continuously execute this block of code until broken out of using the break keyword."},
      {bulletPoint: "A call to vs.read() on line 31 returns the current frame of the video that we ensure we are getting properly on line 32. "},
      {bulletPoint: "We also define a string named text and initialise it to indicate the video is “Unoccupied”. If there is motion, we can update this string."},
      {bulletPoint: "If the frame is not successfully read form the video source, we’ll break from the loop on lines 37 and 38."},
      {bulletPoint: "The next step is to prepare our frame for motion analysis so we can accurately compare the pixel intensity of the background and current frame. On line 41, we resize the frame down to a width of 500 pixels as processing large images is slow and computationally expensive. On the next line, we convert the image to grayscale since colour doesn’t have an effect on the motion detection algorithm we’ll be using. Finally, on line 43, we’ll apply blurring to smooth our images. Since no two frames will be exactly the same, some pixels will certainly have different pixel intensities. Therefore, we apply smoothing to average the pixel intensities across a 21 x 21 region to help prevent irrelevant environment changes (like lighting fluctuations) from throwing off our algorithm."},
      {bulletPoint: "I bet you can already see how powerful and useful OpenCV and similar libraries can be!"},
      {bulletPoint: "On lines 46-48, we check if the firstFrame variable is initialised. If it’s not, we store the current frame for reference and jump to the start of the next iteration of the loop using the continue keyword."},
      {images: [{image: module2Three, alt: ""}]},
      {bulletPoint: "Now we have the background frame in firstFrame, and the current frame in gray, we can compute the difference between them. This is a simple subtraction where we take the difference between their absolute pixel intensities and store it in frameDelta (line 52). We’ll use OpenCVs absdiff method for this."},
      {bulletPoint: "An example of frame delta can be seen below:"},
      {images: [{image: frameDelta, alt: ""}]},
      {bulletPoint: "The background of the image is clearly black. However, regions that contain motion (such as me checking out the biscuit tin) are much lighter. Large frame deltas indicate motion is taking place."},
      {bulletPoint: "Next, on line 53, we apply a threshold to the framDelta that highlights areas with significant changes in pixel intensity. If a pixel's absolute difference is less than 25, we ignore it and set it to black (the background). If the change is greater than 25, we set it to white (the foreground). Below is an example of what our threshold delta image looks like:"},
      {images: [{image: threshold, alt: ""}]},
      {bulletPoint: "Given this thresholded image (stored in thresh on line 57), it’s simple to apply contour detection to find the outlines of these white regions (lines 58-60). We use cv2.findContours to detect the boundaries of our white region. We specify cv2.RETR_EXTERNAL to retrieve only outer contours."},
      {bulletPoint: "Using a for loop, we loop over each of the contours on line 63, where we filter out small irrelevant contours that are smaller than the specified –min-area. We’ll draw a box surrounding the motion region on lines 70 and 71 and also update our text string to “Occupied”."},
      {bulletPoint: "Well done! This is the nitty gritty part of the program. The next snippet simply wraps everything up:"},
      {images: [{image: module2Four, alt: ""}]},
      {bulletPoint: "On lines 75-78, we draw the video status in the top-left corner and a timestamp in the bottom-left (to give it that security footage feel):"},
      {bulletPoint: "Lines 81-83 displays the results of our work. We display the video that will detect any motion on line 81, the threshold image on line 82 and the frame delta on line 83."},
      {bulletPoint: "Note: You may need to tune the values for cv2.threshold and the –min-area argument to get the best results for your lighting conditions."},
      {bulletPoint: "Finally, if the program is stopped from the command line, the while loop is broken on line 87, the video streams are stopped and the windows are closed."}
    ]
  }
];

export const results = [
  {
    title: "Results",
  }
]