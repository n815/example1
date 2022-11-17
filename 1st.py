from cProfile import label
from tkinter import *
from PIL import ImageTk,Image

root=Tk()
root.geometry("400x400")

i=ImageTk.PhotoImage(Image.OPEN("L:\gui_python\783151.jpg"))
l=Label(root,image=i).pack()


root.mainloop()