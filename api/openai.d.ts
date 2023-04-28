declare module 'openai' {
    namespace completions {
        interface Choice {
            text: string;
        }

        interface Result {
            choices: Choice[];
        }
    }

    interface CompletionParameters {
        engine: string;
        prompt: string;
        maxTokens: number;
        n?: number;
        stop?: string | string[];
    }

    interface Configuration {
        apiKey: string;
    }

    function createCompletion(
        params: CompletionParameters,
        config: Configuration
    ): Promise<import('axios').AxiosResponse<completions.Result>>;
}
