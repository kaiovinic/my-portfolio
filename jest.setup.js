import '@testing-library/jest-dom'

// Mock next/image since it requires a loader that is not present in Jest
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, fill, style, className, ...props }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={className} style={style} {...props} />;
  },
}));

