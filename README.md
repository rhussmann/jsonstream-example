# jsonstream-example

This repo is an example usage of the JSONStream NPM module. I kept running into
either `TypeError('invalid data');` exceptions, or `Invalid non-string/buffer
chunk` exceptions. It only occurred when I used JSONStream to write to another
stream. I know that sounds dumb, but the behavior isn't exhibited when no
writeable stream is attached to JSONStream's pipe.

## Cause
Ultimately, I was *handling it wrong*, as one of my co-workers would say.
The JSON stream is outputting Javascript objects, like it should. However, in
all of my attempts to use it I was piping JSONStream to either `stdout` or a
writeable file stream. Those streams don't accept JSON objects. To use either
`stdout` or a writeable file stream, the stream needs to be converted to a
string representation. This is exactly what JSONStream.stringify() does.

Thanks to [dreae](https://www.github.com/dreae) for helping me get my head
around it. Hope this helps someone else that might be in the same spot.

## Usage
I've included a sample JSON file: `input/reading_list.json`. The program
converts a JSON array of sample data in a specific format to Markdown. The
input and output isn't important, I'm just using it to exhibit the behavior.

The program reads from `stdin` and outputs to `stdout`. To run the program, run
the command:
```
npm -s start < ./input/reading_list.json
```
A working example is on the `master` branch. A non-working example is on the
`broken` branch.
