import prismaClient from "../../prisma";


interface MovieRequest {
  rating: string,
  id: string
}



class RateMovieService {
  async execute({ id, rating }: MovieRequest) {

    const rateMovie = await prismaClient.movie.update({
      where: { id: parseInt(id) },
      data: { rating: parseInt(rating) }
    })

    return rateMovie
  }
}

export { RateMovieService }