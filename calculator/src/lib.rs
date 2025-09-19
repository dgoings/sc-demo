#[allow(warnings)]
mod bindings;

use bindings::exports::math::calculator::calculate::{Guest, Op};

// Bring the imported operation functions into scope
use bindings::ops::adder::add::add;
use bindings::ops::multiplier::multiply::multiply;

struct Component;

impl Guest for Component {
    fn eval_expression(op: Op, x: u32, y: u32) -> u32 {
        match op {
            Op::Add => add(x, y),
            Op::Multiply => multiply(x, y),
        }
    }
}

bindings::export!(Component with_types_in bindings);
