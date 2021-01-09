class Circle:

    # instance attribute
    def __init__(self, radius, name, pos_x, pos_y):
        self.radius = radius
        self.name = name
        self.pos_x = pos_x
        self.pos_y = pos_y

    # instance method
    def move(self, pos_x1, pos_y1):
        self.pos_x = self.pos_x + pos_x1
        self.pos_y = self.pos_y + pos_y1

    def giveMeName(self):
        return (f'The circle name is {self.name}')


circle_1 = Circle(3, "first", 2, 5)

circle_1.move(3, 6)
print(circle_1.pos_x, circle_1.pos_y)
print(circle_1.giveMeName())


# OUTPUT
# 5 11
# The circle name is first
