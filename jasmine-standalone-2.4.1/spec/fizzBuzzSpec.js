describe("Fizzbuzz", function() {

  var fizzbuzz;

    describe("knows when a number is", function() {
        it('divisible by 3', function() {
          fizzbuzz = new Fizzbuzz();
          expect(isDivisibleByThree(3)).toBe(true);
    });
  });
});
