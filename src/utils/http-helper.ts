interface HttpResponse {
    statusCode: number;
    body: any;
}

export const ok = (data: any) : Promise <HttpResponse> => {
    return Promise.resolve({
        statusCode: 200,
        body: data
    });
}

export const noContent = (): Promise<HttpResponse> => {
    return Promise.resolve({
        statusCode: 204,
        body: null
    });
}