//// [emitExponentiationOperatorInTempalteString4.ts]
import { _ as _type_of } from "@swc/helpers/_/_type_of";
var t1 = 10;
++t1, t1++, _type_of(Math.pow(--t1, Math.pow(10, t1))), // TempateHead & TemplateTail are empt
"".concat(Math.pow(t1, -10), " hello world ").concat(Math.pow(t1, -10)), "".concat(Math.pow(-t1, 10) - t1, " hello world ").concat(Math.pow(-t1, 10) - t1), "".concat(Math.pow(-++t1, 10) - t1, " hello world ").concat(Math.pow(t1, Math.pow(-++t1, -t1))), "".concat(Math.pow(-t1++, 10) - t1, " hello world ").concat(Math.pow(10, Math.pow(-t1++, -t1))), "".concat(Math.pow(~t1, Math.pow(10, --t1)), " hello world ").concat(Math.pow(~t1, Math.pow(10, --t1))), "".concat(_type_of(Math.pow(t1, Math.pow(10, t1))), " hello world ").concat(_type_of(Math.pow(t1, Math.pow(10, t1)))), ++t1, t1++, _type_of(Math.pow(--t1, Math.pow(10, t1)));
