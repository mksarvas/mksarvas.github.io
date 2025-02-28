fn main() {
    // hello world
    println!("Hello, world!");
    greet("Alice");
}

fn greet(name: &str) {
    println!("Hello, {}!", name);
}