// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Table {
    uint num;
    uint temp;
    uint[] values;

    function setNumber(uint256 _num) public {
        num = _num;
    }

    function getTable() public returns (uint[] memory ) {

        for(uint i=1; i<=10;i++){
            temp = num*i;
            values.push(temp);
        }
        return (values);
    }

    function test() public pure returns(string memory _test){
        _test = "test successfull";

        return _test;
    }
}
