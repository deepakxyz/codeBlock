import sys
from PyQt5.QtWidgets import QApplication, QLabel, QMainWindow
from PyQt5.QtCore import Qt


class MainWindow(QMainWindow):

    def __init__(self, *args, **kwargs):
        super(MainWindow, self).__init__(*args, **kwargs)

        self.setWindowTitle('My first App')
        # self.geometry(200, 200, 200, 500)

        lable = QLabel('This is my first PyQt5 app')
        lable.setAlignment(Qt.AlignCenter)

        self.setCentralWidget(lable)


app = QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec_()
