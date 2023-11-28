var Election = artifacts . require ("./Election.sol") ;
// we add it to the manifest of deployed contracts to ensure
module.exports = function ( deployer ) {
    deployer.deploy(Election);
};