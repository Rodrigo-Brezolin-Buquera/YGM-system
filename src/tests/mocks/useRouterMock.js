export const useRouterMock = (pathname) => {
    jest.mock('next/router', () => ({
    useRouter: jest.fn()
  }))
  
  useRouter.mockReturnValue({
    query: {id: "id"},
    pathname: pathname,
    push: jest.fn(),
    back: jest.fn()
  })
}

