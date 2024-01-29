import prismaClient from "../../prisma";





class FindUnrateMovieService {
  async execute() {

    const unrateMovie = await prismaClient.movie.findFirst({
      where: { rating: null }
    });
    return unrateMovie
  }
}

export { FindUnrateMovieService }