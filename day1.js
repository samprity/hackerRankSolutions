    function main() {
        var i = 4
            var d = 4.0
            var s = "HackerRank "
            
            // Declare second integer, double, and String variables.
            // Read and save an integer, double, and String to your variables.
            var i2 = parseInt(readLine());
            var d2 = parseFloat(readLine());
            var s2 = readLine();
            // Print the sum of both integer variables on a new line.
            console.log(i + i2 +'\r');

            // Print the sum of the double variables on a new line.
            console.log((d + d2).toFixed(1)+'\r');

            // Concatenate and print the String variables on a new line
            // The 's' variable above should be printed first.
            console.log(s + s2);
    }