var Competition = require('./model/competition');
var CompetitionPerformance = require('./model/competition_performance');
var CompetitionType = require('./model/competition_type');
var Invitation = require('./model/invitation');
var Performance = require('./model/performance');
var PerformanceToken = require('./model/performance_token');
var PerformanceValidation = require('./model/performance_validation');
var Token = require('./model/token');
var TokenSource = require('./model/token_source');
var User = require('./model/user');
var UserFollow = require('./model/user_follow');
var UserInvitation = require('./model/user_invitation');
var UserPerformance = require('./model/user_performance');
var UserToken = require('./model/user_token');
var UserValidation = require('./model/user_validation');
var Validation = require('./model/validation');

CompetitionType.hasMany(Competition);
Competition.belongsTo(CompetitionType);

Competition.belongsToMany(Performance, { through: CompetitionPerformance });
Performance.belongsToMany(Competition, { through: CompetitionPerformance });

Performance.belongsToMany(Competition, { through: CompetitionPerformance });
User.belongsToMany(Performance, { through: UserPerformance });

Performance.belongsToMany(Validation, { through: PerformanceValidation });
Validation.belongsToMany(Performance, { through: PerformanceValidation });

Validation.belongsToMany(User, { through: UserValidation });
User.belongsToMany(Validation, { through: UserValidation });

Token.belongsTo(TokenSource);
TokenSource.hasMany(Token);

User.belongsToMany(Token, { through: UserToken });
Token.belongsToMany(User, { through: UserToken });

User.belongsToMany(User, { through: UserFollow, as: 'follow_user' });


Invitation.belongsToMany(User, { through: UserInvitation });
User.belongsToMany(Invitation, { through: UserInvitation });
