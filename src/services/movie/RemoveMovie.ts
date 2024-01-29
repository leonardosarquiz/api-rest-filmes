import prismaClient from "../../prisma";

interface MovieRequest {

  id: string
}



class DeleteMovieService {
  async execute({ id }: MovieRequest) {

    const movieDeleted = prismaClient.movie.delete({
      where: { id: parseInt(id) }
    });


    return movieDeleted

  }
}

export { DeleteMovieService }