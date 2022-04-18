class ErrorBag {
    private errors: Error[];

    constructor() {
        this.errors = [];
    }

    public add(error: unknown) {
        if (error instanceof Error) {
            this.errors.push(error);
        }
        throw new Error('Invalid error type');
    }

    public getErrors(): Error[] {
        return this.errors;
    }

    public hasErrors(): boolean {
        return this.errors.length > 0;
    }

    public clear() {
        this.errors = [];
    }

    public logErrors() {
        if (this.hasErrors()) {
            this.errors.forEach(error => {
                console.log(error.message);
            });
        }
    }

    handleErrors() {
        if (this.hasErrors()) {
            throw new Error(
                this.errors.map(error => error.message).join('\n')
            );
        }
    }

}