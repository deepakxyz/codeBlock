import sys
from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication, QMainWindow, QTableWidgetSelectionRange, QWidget, QPushButton, QLabel, QVBoxLayout, QHBoxLayout, QTextBrowser
from PyQt5.QtGui import QTextCursor


class MainWindow(QMainWindow):

    def __init__(self):
        super(MainWindow, self).__init__()
        self.setWindowTitle('My App')
        self.setGeometry(200, 200, 750, 300)
        self.initUI()

    def initUI(self):
        # central widget
        wid = QtWidgets.QWidget(self)
        mainLayout = QtWidgets.QVBoxLayout()
        layout = QtWidgets.QHBoxLayout()

        self.lineEdit = QtWidgets.QLineEdit(self)
        le_layout = QtWidgets.QHBoxLayout()
        # text browser
        self.textBrowser = QTextBrowser(self)
        # self.textBrowser.setOpenExternalLinks(True)
        self.textBrowser.setOpenLinks(True)
        self.textBrowser.setStyleSheet('font-size: 20px;')
        self.textBrowser.resize(30, 30)
        layout.addWidget(self.textBrowser)

        mainLayout.addLayout(layout)
        mainLayout.addLayout(le_layout)
        wid.setLayout(mainLayout)
        self.setCentralWidget(wid)

    def generateContent(self):
        self.textBrowser.moveCursor(QTextCursor.Start)
        self.textBrowser.append('Hello World')
        self.textBrowser.append('<a href="text.txt">Google</a>')


def main():
    app = QApplication(sys.argv)
    win = MainWindow()
    win.show()
    sys.exit(app.exec_())


main()
