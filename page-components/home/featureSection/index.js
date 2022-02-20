import Button from 'react-bootstrap/Button';

const FeatureSection = () => {
  return (
    <div className="features mt-4">
      <div className="container">
        <div className="row gx-0">
          <div className="col-12 col-md-4 featureWrapper">
            <div className="featureColumn my-0 my-md-4">
              <h4 className="mb-3">KALPA</h4>

              <p className="mb-0 mb-md-4 featureText">
                Kalpa Builders are one of the Bangalore&apos;s finest builders, known for their special emphasis on quality. Established in 2004 providing unmatched. Kalpa Builders are one of the Bangalore&apos;s finest . . . 
              </p>

              <Button>Read More</Button>
            </div>
          </div>
          
          <div className="col-12 col-md-4 featureWrapper">
            <div className="featureColumn my-0 my-md-4">
              <h4 className="mb-3">OUR FEATURES</h4>

              <p className="mb-0 mb-md-4 featureText">
                We have been providing houses with the quality that is unmatched. Sankalpa developers employ the following quality policies ensure that its standard . . .  
              </p>

              <Button>Read More</Button>
            </div>
          </div>

          <div className="col-12 col-md-4 featureWrapper">
            <div className="featureColumn my-0 my-md-4">
              <h4 className="mb-3">OUR PHYLOSOPHY</h4>

              <p className="mb-0 mb-md-4 featureText">
                The company&apos;s belief is that its customers are its greatest assets. These assets have been won through sheer sincerity and transparency in dealings whether it is small or huge residential complexes . . .  
              </p>

              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default FeatureSection;