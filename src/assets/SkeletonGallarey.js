import Shimmer from "./Shimmer";
import SkeletonElement from "./Skeleton";

const SkeletonGallarey = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-gallery">
        <SkeletonElement type="thumbnail"/>
      </div>
      <Shimmer/>
    </div>
  );
}
 
export default SkeletonGallarey;