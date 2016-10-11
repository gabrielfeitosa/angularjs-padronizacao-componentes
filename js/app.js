(function () {

    angular.module('app', [])
        .directive('botao', function () {
            return {
                restrict: 'E',
                require: '^ngClick',
                scope: {
                    label: '@',
                    tipo: '@',
                    acao: '&click'
                },
                controller: 'Controller as vm',
                templateUrl: function (elem, attrs) {
                    return 'componentes/botao-' + (attrs.tipo || 'padrao') + '.html';
                }
            }
        })
        .controller('Controller', function () {
            var vm = this;

            vm.alertar = function (label) {
                alert(label);
            }

            vm.autorizar  =function (acao) {
                vm.alertar('Vai pedir autorização e depois alertar');
                acao();
            }
        });
})();