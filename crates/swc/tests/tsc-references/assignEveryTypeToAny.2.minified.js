//// [assignEveryTypeToAny.ts]
// all of these are valid
var E, E1;
import "@swc/helpers/_/_class_call_check";
(E1 = E || (E = {}))[E1.A = 0] = "A", E.A, E.A;
