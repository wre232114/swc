//// [spreadUnion3.ts]
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
function g(t) {
    _object_spread({}, t).a; // might not have 'a'
}
_object_spread({
    y: 123
}, void 0) // y: string | number
, g(), g(void 0), g(null), _object_spread({}, nullAndUndefinedUnion, nullAndUndefinedUnion), _object_spread({}, nullAndUndefinedUnion);
