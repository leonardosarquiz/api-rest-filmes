import prismaClient from "../../prisma";


interface MovieRequest {
  title: string
  description: string
}


class CreateMovieService {
  async execute({ description, title }: MovieRequest) {

    if (!title) {
      throw new Error("Por favor, digite o nome do filme!")
    }
    if (!description) {
      throw new Error("Por favor, digite a descrição do filme!")
    }


    const movieAlredyExists = await prismaClient.movie.findFirst({
      where: {
        title: title
      }
    })

    if (movieAlredyExists) {
      throw new Error('Este filme já está cadastrado.')
    }


    const movie = await prismaClient.movie.create({
      data: {
        title: title,
        description: description
      }
    })

    return movie
  }
}

export { CreateMovieService }