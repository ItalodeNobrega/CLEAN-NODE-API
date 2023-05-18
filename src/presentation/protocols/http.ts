export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  body?: any
  /* passando paramêtro opcional por causa uma rota get,
   get não usa body, ele geralmente usa req.params ou req.query.string */
}
