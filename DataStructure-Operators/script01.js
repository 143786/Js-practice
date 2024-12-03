/* *** Rest Patern : look exactly like the spread operator. 
it has the same syntax with the ...  but it actually does the opposite 
of the spread operator.
*** we use the spread operator to build new arrays or to passe multiple
values into a function. so those are the two use case of the spread operator.
and in the both cases, we use the spread operator to expand an array into
individual elements.
 ***  the rest pattern uses the exact same syntax. however,
to collect multiple elements and condense them into an array. so that's really
the opposite of spread; the spread operator is to unpack an array while rest
is to pack elements into an array.     *** the rest element must be the 
last elements like this :
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);*/
