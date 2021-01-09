class Computer:
    def __init__(self):
        self.__maxprice = 500
        self.minprice = 100

    def sell(self):
        print(f"Selling Max-price: {self.__maxprice}")
        print(f"Selling Min-price: {self.minprice}")

    def setMaxPrice(self, price):
        self.__maxprice = price


c = Computer()
c.sell()

print('After changing')
c.minprice = 400
c.__maxprice = 600
c.sell()

print("After chaging using class method")
c.setMaxPrice(600)
c.sell()
