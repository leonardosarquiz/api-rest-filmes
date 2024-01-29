import prismaClient from "../../prisma";

interface MovieRequest {
  title: string
  description: string
  id: string
}



class UpdateMovieService {
  async execute({ description, id, title }: MovieRequest) {


    if (!title) {
      throw new Error("Por favor, digite o nome do filme!")
    }

    const updateMovie = await prismaClient.movie.update({
      where: { id: parseInt(id) },
      data: { title: title, description: description }
    })


    return updateMovie
  }
}

export { UpdateMovieService }