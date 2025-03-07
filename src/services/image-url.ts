const getCroppedImage = (url: string) => {
  return url.replace('media/', 'media/crop/600/400/');
};

export default getCroppedImage;

// const getCroppedImage = (url: string) => {
//   const target = 'media/';
//   const index = url.indexOf(target) + target.length;
//   return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
// };

// export default getCroppedImage;
