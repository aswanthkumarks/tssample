function Component(target) {
    console.log("<br/>Decorator")
}


@Component
class SampleTs {
    constructor() {
        console.log("constructor");
    }

    public hello() {
        console.log("<br/>test");
    }
}

let x = new SampleTs();

x.hello();